if(NOT TARGET shopify_react-native-skia::rnskia)
add_library(shopify_react-native-skia::rnskia SHARED IMPORTED)
set_target_properties(shopify_react-native-skia::rnskia PROPERTIES
    IMPORTED_LOCATION "/Users/tomhendra/Developer/tomkit/node_modules/@shopify/react-native-skia/android/build/intermediates/cxx/Debug/5n5k404f/obj/arm64-v8a/librnskia.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/tomhendra/Developer/tomkit/node_modules/@shopify/react-native-skia/android/build/headers/rnskia"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

