#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
JDK_21_PATH="/usr/lib/jvm/java-21-openjdk-amd64"

export JAVA_HOME="${JAVA_HOME:-${JDK_21_PATH}}"
export ANDROID_HOME="${ANDROID_HOME:-$HOME/Android/Sdk}"

cd "$PROJECT_ROOT"
npx cap run android
