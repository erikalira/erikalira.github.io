#!/bin/sh

branch_name=$(git symbolic-ref --short HEAD)

# Define a regex pattern for branch names
branch_name_pattern="^(feat|fix|chore|docs|style|refactor|perf|test|ci|build|revert)\/[0-9]+-[a-z0-9-]+$"

if ! echo "$branch_name" | grep -Eq "$branch_name_pattern"; then
  echo "Error: Branch name '$branch_name' does not match the required pattern."
  echo "Pattern: $branch_name_pattern"
  echo ""
  echo "Branch names should follow the Conventional Commits pattern: type/number-description"
  echo "Where:"
  echo "  - type: 'feat', 'fix', 'chore', 'docs', 'style', 'refactor', 'perf', 'test', 'ci', 'build' or 'revert'"
  echo "  - number: A numeric identifier for the story or task"
  echo "  - description: A hyphen-separated description of the story or task"
  echo ""
  echo "Example: feat/12345-add-new-feature"
  exit 1
fi