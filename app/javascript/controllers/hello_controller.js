// import { Controller } from "@hotwired/stimulus"

// export default class extends Controller {
//   connect() {
//     this.element.textContent = "Hello World!"
//   }
// }

import { Controller } from "@hotwired/stimulus";

// export以下が1つのインスタンス
export default class extends Controller {
  // inputタグを取得しnameTargetという変数に格納
  // spanタグを取得しoutputTargetという変数に格納
  static targets = ["name", "output"];
  
  // <div data-controller="hello">〜</div>が表示されたと同時に実行される
  connect() {
    console.log("Hello, I'm hello_controller.js!!!");
  }
  
  // ボタン押下で実行される(イベントハンドラ)
  greet() {
    this.outputTarget.textContent = `${this.nameTarget.value}`;

    // thisは、今書いているjsファイルで作成したインスタンス自身、つまり、export default class extends Controller以下を指す。
    // → extended {context: Context}

    // this.element
    // → <div data-controller="hello">〜

    // this.nameTarget 
    // → <input data-hello-target="name" type="text">
  }
}
