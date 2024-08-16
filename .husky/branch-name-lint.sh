#!/bin/sh

branch_name=$(git symbolic-ref --short HEAD)

# Define a regex pattern for branch names
branch_name_pattern="^(feat|fix|chore|docs|style|refactor|perf|test|ci|build|revert)\/[0-9]+-[a-z0-9-]+$"

if ! echo "$branch_name" | grep -Eq "$branch_name_pattern"; then
  echo "Error: Branch name '$branch_name' does not match the required pattern."
  echo "Pattern: $branch_name_pattern"
  exit 1
fi