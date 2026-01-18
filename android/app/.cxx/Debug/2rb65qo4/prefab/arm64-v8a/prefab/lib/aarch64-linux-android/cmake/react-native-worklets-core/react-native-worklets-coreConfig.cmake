if(NOT TARGET react-native-worklets-core::rnworklets)
add_library(react-native-worklets-core::rnworklets SHARED IMPORTED)
set_target_properties(react-native-worklets-core::rnworklets PROPERTIES
    IMPORTED_LOCATION "/Users/tomhendra/Developer/tomkit/node_modules/react-native-worklets-core/android/build/intermediates/cxx/Debug/2t3m1406/obj/arm64-v8a/librnworklets.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/tomhendra/Developer/tomkit/node_modules/react-native-worklets-core/android/build/headers/rnworklets"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

