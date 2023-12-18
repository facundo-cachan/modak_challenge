This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Install dependencies

```bash
# 
yarn
```

## Step 2: Launching the app

### For IOS

#### Step 1: Install pods

```bash
# 
yarn update:ios
```

#### Step 2: Build & Test

```bash
# 
yarn ios
```

### For Android

### Step 1: Install dependencies

```bash
# 
yarn update:android
```

### Step 2: Build & Test

```bash
# 
yarn android
```

### Step 3: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start
```

If everything is set up _correctly_, you should see your new app running in your _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from Xcode respectively.

## Push Notifications

### You can test sending and receiving notifications from: "<https://testfcm.com/>" with the following data

### Server Key: AAAALPgKSwI:APA91bEC1E0rwXeMo-y6pnE90tfATB2ojZrB2xrd5CuAA04WRX9gNC9ydlV3JrtoUn8XMhJRoscY0DSIb3tAPjPyA8mZLywGMX0hV_G8BaA6TvnkTzC1TFoV01DbiLRCOOv1vFMSiGdH

### Device Token: getFcmToken, in the console of Metro Bundler

## Troubleshooting

### [FIXED] error bundler: failed to load command: pod, deprecate to_default_s: :to_s, deprecator: ActiveSupport.deprecator

1. run bundle install
2. run bundle update
3. run bundle exec pod install
4. run yarn ios

## Preview

<div style="display: flex; justify-content: space-between; align-items: center">
  <img src="https://github.com/facundo-cachan/modak_challenge/assets/29696243/9debd02e-3a76-4df4-b53d-0582cc7a6181" height="33%" width="33%" />
  <img src="https://github.com/facundo-cachan/modak_challenge/assets/29696243/af68a699-2e95-4e92-b7f5-03e77dcd609e" height="33%" width="33%" />
</div>


