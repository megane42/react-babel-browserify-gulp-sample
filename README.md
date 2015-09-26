# react-babel-browserify-gulp-sample

* [hkusu/react-babel-browserify-gulp-sample](https://github.com/hkusu/react-babel-browserify-gulp-sample) というシンプルでわかりやすいテンプレを自分用にカスタマイズしたもの。
* ES2015 や CommonJS の構文が使える。
* オリジナルの解説: [React.js + Babel + Browserify + gulp の環境を作ってみた](http://qiita.com/hkusu/items/e068bba0ae036b447754)

## オリジナルからの主な変更点

* ファイル構成の変更
    * ソースを `src/` 配下に移動
    * コードはすべて `app/` 配下にビルド
* Web サーバーで公開する範囲を `app/` 配下のみに限定
* ビルドした JS コードの minify を実施

## インストール

```
$ git clone https://github.com/megane42/react-babel-browserify-gulp-sample.git
$ cd react-babel-browserify-gulp-sample
$ npm install
$ npm install -g browserify gulp
```

## 開発

html は `app/` 配下に書く。JS のコードは `src/` 配下に書いて、以下のコマンドでビルドする。

```
$ gulp browserify
```

もしくは、一度以下のコマンドで watch しておくと、編集するたびにビルドされる。

```
$ gulp watch &
```

## 確認

以下のコマンドで Web サーバーが立ち上がり、`app/` 配下が公開される。

```
$ gulp webserver
```

## TODO

テストできるようにしたい。

## License

MIT
