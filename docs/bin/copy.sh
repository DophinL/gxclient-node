#!/usr/bin/env bash
BASEDIR=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cp "${BASEDIR}/../copy/Overview.md" "${BASEDIR}/../api"
cp "${BASEDIR}/../copy/API.md" "${BASEDIR}/../api/README.md"