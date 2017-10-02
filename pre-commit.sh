#!/bin/bash

JSFILES=$(git diff-index --name-status --cached HEAD | grep -v ^D | egrep '.js$' | cut -c3-)
if [ "$JSFILES" == "" ]; then
    exit 0
fi

PASS=true
for FILE in $JSFILES
do
  eslint "$FILE" > /dev/null

  if [ $? -eq 0 ]; then
    printf "\t\033[32mESLint Passed: $FILE\033[0m\n"
  else
    printf "\t\033[41mESLint Failed: $FILE\033[0m\n"
    eslint "$FILE" --fix

    if [ $? -eq 0 ]; then
      printf "\n \n There were errors, but some may have been \033[42mautomatically fixed\033[0m by eslint. Please stage those fixes and commit again. \n \n"
    fi

    PASS=false
  fi
done

if ! $PASS; then
  printf "\033[41mCOMMIT FAILED:\033[0m Your commit contains files that should pass ESLint but do not. Please fix the ESLint errors and try again.\n"
  exit 1
else
  printf "\033[42mESLINT SUCCEEDED\033[0m\n"
fi