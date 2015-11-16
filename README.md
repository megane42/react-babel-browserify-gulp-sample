# react-babel-browserify-gulp-sample

* [hkusu/react-babel-browserify-gulp-sample](https://github.com/hkusu/react-babel-browserify-gulp-sample) を自分用にカスタマイズしたもの。
* オリジナルの特徴:
    * シンプルでとてもわかりやすい。
    * ES2015 や CommonJS の構文が使える。
    * 詳細: [React.js + Babel + Browserify + gulp の環境を作ってみた](http://qiita.com/hkusu/items/e068bba0ae036b447754)
* flux アーキテクチャを導入した拡張版を `flux` ブランチに追加した。

## オリジナルからの主な変更点

* ファイル構成の変更
    * ビルド前のソースは `src/` 配下へ
    * 公開するファイルは `app/` 配下へ
* CSS も結合 & minify できるようにした
* ビルドしたコードの minify を実施

## インストール

```
$ git clone https://github.com/megane42/react-babel-browserify-gulp-sample.git
$ cd react-babel-browserify-gulp-sample
$ npm install
$ npm install -g browserify gulp
```

## 開発

html は `app/` 配下に書く。CSS と JS のコードは `src/` 配下に書いて、以下のコマンドでビルドする。

```
$ gulp browserify
$ gulp css
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

* テストできるようにしたい。

## License

MIT
