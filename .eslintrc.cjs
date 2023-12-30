module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh"],
    rules: {
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],

        // アロー関数を強制
        "react/function-component-definition": [
            2,
            { namedComponents: "arrow-function" },
        ],
        // 分割代入を強制するのを無効化
        "react/destructuring-assignment": "off",
        // PropTypesを指定するルールを無効化
        "react/prop-types": "off",
        // atomの命名規則をsnake_caseにする
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "variable",
                format: ["snake_case"],
                filter: {
                    regex: "^.*Atom$",
                    match: true,
                },
            },
        ],
        // 1++のような書き方を許可
        "no-plusplus": [2, { allowForLoopAfterthoughts: true }],
        // メディアにキャプションを要求しない
        "jsx-a11y/media-has-caption": "off",
        // アロー関数が常に本体({}で囲まれた部分)を返すようにする
        "arrow-body-style": ["error", "always"],
        // labelのルールを追加
        "jsx-a11y/label-has-associated-control": [
            2,
            {
                labelComponents: ["label"],
                controlComponents: ["Checkbox"],
                depth: 3,
                assert: "either",
            },
        ],
        // hooksのルールを有効化
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/rules-of-hooks": "error",
        // 未使用の変数に警告を出す
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        // typeをimportする時は明示的に記述を強制
        "@typescript-eslint/consistent-type-imports": "error",
        // 到達不可能なコードを検出する
        "no-unreachable": ["warn"],
        // importの順番を指定
        "import/order": ["warn"],
    },
};
