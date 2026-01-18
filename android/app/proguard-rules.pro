# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# Keep Google Error Prone annotations
-dontwarn com.google.errorprone.annotations.**
-keep class com.google.errorprone.annotations.** { *; }

# React Native specific rules
-keep class com.facebook.react.** { *; }
-keep class com.facebook.jni.** { *; }

# JSC and Hermes rules
-keep class com.facebook.jsc.** { *; }
-keep class com.facebook.hermes.** { *; }

# General Android rules for React Native
-keepattributes *Annotation*
-keepclassmembers class ** {
    @com.facebook.react.uimanager.annotations.ReactProp <methods>;
}
-keepclassmembers class ** {
    @com.facebook.react.uimanager.annotations.ReactPropGroup <methods>;
}
-keepclassmembers class ** {
    @com.facebook.react.bridge.ReactMethod <methods>;
}

# Keep classes that are referenced by reflection
-keepclassmembers class * {
    @com.facebook.react.bridge.ReadableType *;
}

# Google Sign-In
-keep class com.google.android.gms.auth.** { *; }
-keep class com.google.android.gms.common.** { *; }
-keep class com.google.android.gms.signin.** { *; }

# Suppress warnings for missing classes that are optional
-dontwarn javax.annotation.**
-dontwarn org.conscrypt.**
-dontwarn org.bouncycastle.**
-dontwarn org.openjsse.**

# Skia - Keep all Skia classes for React Native Skia
-keep class com.shopify.reactnative.skia.** { *; }
