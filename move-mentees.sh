#!/bin/bash

# Create alumni directory if it doesn't exist
mkdir -p src/content/alumni

# Move all files from cohort-4 to alumni
cp src/content/cohort-4/* src/content/alumni/

# Remove cohort field from all files in alumni directory
for file in src/content/alumni/*.md; do
  sed -i '' '/cohort:/d' "$file"
done

# Optional: Remove cohort-3 directory after successful move
# rm -rf src/content/cohort-3 