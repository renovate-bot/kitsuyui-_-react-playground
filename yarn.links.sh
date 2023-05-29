#!/bin/sh
cd packages/clock
yarn link
cd ../timer
yarn link
cd ../stopwatch
yarn link
cd ../components
yarn link
yarn link @kitsuyui/react-clock
yarn link @kitsuyui/react-timer
yarn link @kitsuyui/react-stopwatch
cd ../style-bulma
yarn link @kitsuyui/react-clock
yarn link @kitsuyui/react-timer
yarn link @kitsuyui/react-stopwatch
yarn link @kitsuyui/react-components
cd ../..
