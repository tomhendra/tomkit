#!/usr/bin/env node
/**
 * Patch react-native-worklets-core for RN 0.82+
 * RN 0.82 renamed hermes-engine::libhermes to hermes-engine::hermesvm
 */
const fs = require('fs')
const path = require('path')

const cmakePath = path.join(
  __dirname,
  '..',
  'node_modules',
  'react-native-worklets-core',
  'android',
  'CMakeLists.txt',
)

if (!fs.existsSync(cmakePath)) {
  console.log('[patch-worklets] CMakeLists.txt not found, skipping')
  process.exit(0)
}

let content = fs.readFileSync(cmakePath, 'utf8')

// Check if already patched
if (content.includes('hermesvm')) {
  console.log('[patch-worklets] Already patched')
  process.exit(0)
}

const oldCode = `  target_link_libraries(
    \${PACKAGE_NAME}
    hermes-engine::libhermes
  )`

const newCode = `  # RN 0.82+ renamed libhermes to hermesvm
  if(ReactAndroid_VERSION_MINOR GREATER_EQUAL 82)
    target_link_libraries(
      \${PACKAGE_NAME}
      hermes-engine::hermesvm
    )
  else()
    target_link_libraries(
      \${PACKAGE_NAME}
      hermes-engine::libhermes
    )
  endif()`

if (!content.includes(oldCode)) {
  console.log(
    '[patch-worklets] Target code not found, may already be patched or changed',
  )
  process.exit(0)
}

content = content.replace(oldCode, newCode)
fs.writeFileSync(cmakePath, content)
console.log(
  '[patch-worklets] Successfully patched for RN 0.82 hermes compatibility',
)
