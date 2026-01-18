if(NOT TARGET react-native-nitro-modules::NitroModules)
add_library(react-native-nitro-modules::NitroModules SHARED IMPORTED)
set_target_properties(react-native-nitro-modules::NitroModules PROPERTIES
    IMPORTED_LOCATION "/Users/tomhendra/Developer/tomkit/node_modules/react-native-nitro-modules/android/build/intermediates/cxx/Debug/621l5p5o/obj/arm64-v8a/libNitroModules.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/tomhendra/Developer/tomkit/node_modules/react-native-nitro-modules/android/build/headers/nitromodules"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

