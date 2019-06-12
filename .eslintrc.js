module.exports = {
  parser: "babel-eslint",
  env: {
    "browser": true,
    "jest": true
  },
  parserOptions: {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    }
  },
  plugins: [
    "react-extra",
    "jsx-a11y",
    "import"
  ],
  extends: "airbnb",
  rules: {
    "indent": [ "error", 2 ],
    "linebreak-style": [ "error", "unix" ],
    "quotes": [ "error", "single" ],
    "semi": [ "error", "always" ],
    "react/jsx-no-undef": [ 2, {
      "allowGlobals": true
    } ],
    "arrow-parens": [ "error", "as-needed" ],
    "comma-dangle": [ "error", "never" ],
    "global-require": "off",
    "import/first": "off",
    "import/no-duplicates": "off",
    "import/no-named-as-default": "off",
    "import/no-extraneous-dependencies": [ "error", {
      "devDependencies": true
    } ],
    "import/order": "off",
    "import/prefer-default-export": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-control-statements/jsx-jcs-no-undef": "off",
    "jsx-quotes": [ "error", "prefer-single" ],
    "lines-between-class-members": [ "error", "always", {
      "exceptAfterSingleLine": true
    } ],
    "no-confusing-arrow": "off",
    "no-console": "off",
    "no-underscore-dangle": "off",
    "no-use-before-define": "off",
    "object-curly-newline": "off",
    "react/destructuring-assignment": [ true, "always", {
      "ignoreClassFields": true
    } ],
    "react/no-typos": "off",
    "react/jsx-filename-extension": [ "error", {
      "extensions": [ ".js", ".jsx" ]
    } ],
    "react-extra/no-inline-styles": 2,
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": false,
        "overrides": {
          "import": {
            "after": true
          },
          "from": {
            "after": true
          },
          "export": {
            "after": true
          },
          "const": {
            "after": true
          },
          "let": {
            "after": true
          },
          "else": {
            "after": true
          },
          "return": {
            "after": true
          },
          "try": {
            "after": true
          },
          "finally": {
            "after": true
          }
        }
      }
    ]
  },
  settings: {
    "import/resolver": {
      "babel-module": {
        "root": [ "./src" ]
      }
    }
  }
}