#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

if ! command -v npm >/dev/null 2>&1; then
  echo "npm is required but was not found." >&2
  exit 1
fi

npm run build

DEPLOY_USER="${DEPLOY_USER:-palawi}"
DEPLOY_HOST="${DEPLOY_HOST:-100.84.213.26}"
DEPLOY_PORT="${DEPLOY_PORT:-22}"
DEPLOY_DIR="${DEPLOY_DIR:-/var/www/palawi/html}"

if [ ! -d "dist" ]; then
  echo "dist/ not found. Build failed?" >&2
  exit 1
fi

if ! command -v sftp >/dev/null 2>&1; then
  echo "sftp is required but was not found." >&2
  exit 1
fi

batch_file="$(mktemp)"
trap 'rm -f "$batch_file"' EXIT
cat > "$batch_file" <<EOF
-mkdir ${DEPLOY_DIR}
cd ${DEPLOY_DIR}
put -r dist/*
EOF

sftp \
  -P "${DEPLOY_PORT}" \
  -o BatchMode=no \
  -o PreferredAuthentications=password \
  -o PubkeyAuthentication=no \
  -b "$batch_file" \
  "${DEPLOY_USER}@${DEPLOY_HOST}"
