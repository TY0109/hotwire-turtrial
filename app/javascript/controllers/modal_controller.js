// import { Controller } from "@hotwired/stimulus"

// // Connects to data-controller="modal"
// export default class extends Controller {
//   connect() {
//   }
// }

import { Controller } from "@hotwired/stimulus"
import { Modal } from "bootstrap"

export default class extends Controller {
  // `connect()`はStimulusのライフサイクルコールバックの1つ
  //  <div class="modal fade" data-controller="modal">〜</div>が画面に表示されたら、connectが実行される
  connect() {
    // モーダル生成
    // this.elementは、モーダルのhtml<div class="modal fade" data-controller="modal">〜</div>を指す
    this.modal = new Modal(this.element)
    // モーダル表示
    this.modal.show()
  }

  // 更新ボタン押下で実行される(イベントハンドラ)
  close(event) {
    // event.detail.successは、レスポンスが成功ならtrueを返す
    // バリデーションエラー時はモーダルを閉じたくないので、成功時のみ閉じる
    if (event.detail.success) {
      // モーダルを閉じる
      this.modal.hide()
    }
  }
}
