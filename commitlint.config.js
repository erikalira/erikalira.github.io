module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ],
    "type-empty": [0, "never"],
    "subject-empty": [0, "never"],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(:\w+: )?(\w*)(?:\((.*)\))?: (.*)$/,
      headerCorrespondence: ["emoji", "type", "scope", "subject"],
    },
  },
};
