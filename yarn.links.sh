#!/bin/sh
cd config/eslint-config-custom
yarn link
cd ../../packages/clock
yarn link
cd ../timer
yarn link
cd ../stopwatch
yarn link
cd ../dekamoji
yarn link
cd ../components
yarn link
yarn link @kitsuyui/react-clock
yarn link @kitsuyui/react-timer
yarn link @kitsuyui/react-stopwatch
yarn link @kitsuyui/react-dekamoji
cd ../style-bulma
yarn link @kitsuyui/react-clock
yarn link @kitsuyui/react-timer
yarn link @kitsuyui/react-stopwatch
yarn link @kitsuyui/react-components
yarn link @kitsuyui/react-dekamoji
cd ../..
