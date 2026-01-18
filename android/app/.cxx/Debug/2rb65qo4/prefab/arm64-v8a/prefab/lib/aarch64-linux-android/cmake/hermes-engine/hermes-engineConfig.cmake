if(NOT TARGET hermes-engine::hermesvm)
add_library(hermes-engine::hermesvm SHARED IMPORTED)
set_target_properties(hermes-engine::hermesvm PROPERTIES
    IMPORTED_LOCATION "/Users/tomhendra/.gradle/caches/8.14.3/transforms/688a1448d932f69cd055b3997d47f801/transformed/hermes-android-0.14.0-debug/prefab/modules/hermesvm/libs/android.arm64-v8a/libhermesvm.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/tomhendra/.gradle/caches/8.14.3/transforms/688a1448d932f69cd055b3997d47f801/transformed/hermes-android-0.14.0-debug/prefab/modules/hermesvm/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

