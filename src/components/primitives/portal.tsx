import { useEffect } from 'react';
import { create } from 'zustand';

const DEFAULT_PORTAL_HOST = 'INTERNAL_PRIMITIVE_DEFAULT_HOST_NAME';

type PortalMap = Map<string, React.ReactNode>;
type PortalHostMap = Map<string, PortalMap>;

const usePortalStore = create<{ map: PortalHostMap }>(() => ({
  map: new Map<string, PortalMap>().set(DEFAULT_PORTAL_HOST, new Map<string, React.ReactNode>()),
}));

function updatePortal(hostName: string, name: string, children: React.ReactNode) {
  usePortalStore.setState(prev => {
    const next = new Map(prev.map);
    const portal = next.get(hostName) ?? new Map<string, React.ReactNode>();
    portal.set(name, children);
    next.set(hostName, portal);
    return { map: next };
  });
}

function removePortal(hostName: string, name: string) {
  usePortalStore.setState(prev => {
    const next = new Map(prev.map);
    const portal = next.get(hostName) ?? new Map<string, React.ReactNode>();
    portal.delete(name);
    next.set(hostName, portal);
    return { map: next };
  });
}

/**
 * Renders all portals for a given host name.
 * Place at root of app or where portals should render.
 */
export function PortalHost({ name = DEFAULT_PORTAL_HOST }: { name?: string }) {
  const portalMap = usePortalStore(state => state.map).get(name) ?? new Map<string, React.ReactNode>();
  if (portalMap.size === 0) return null;
  return <>{Array.from(portalMap.values())}</>;
}

/**
 * Renders children into a PortalHost elsewhere in the tree.
 * Useful for modals, dropdowns, tooltips, etc.
 */
export function Portal({
  name,
  hostName = DEFAULT_PORTAL_HOST,
  children,
}: {
  name: string;
  hostName?: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    updatePortal(hostName, name, children);
  }, [hostName, name, children]);

  useEffect(() => {
    return () => {
      removePortal(hostName, name);
    };
  }, [hostName, name]);

  return null;
}
