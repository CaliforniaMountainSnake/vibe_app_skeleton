#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
JDK_21_PATH="/usr/lib/jvm/java-21-openjdk-amd64"

export JAVA_HOME="${JAVA_HOME:-${JDK_21_PATH}}"
export ANDROID_HOME="${ANDROID_HOME:-$HOME/Android/Sdk}"

cd "$PROJECT_ROOT/android"
chmod +x gradlew 2>/dev/null || true
./gradlew assembleDebug

APK_DIR="$PROJECT_ROOT/android/app/build/outputs/apk/debug"
APK_FILE=$(find "$APK_DIR" -maxdepth 1 -name "*.apk" 2>/dev/null | head -1)

if [ -n "$APK_FILE" ] && [ -f "$APK_FILE" ]; then
    echo ""
    echo "✓ APK: $(realpath "$APK_FILE")"
else
    echo "✗ APK not found in $APK_DIR" >&2
    exit 1
fi
