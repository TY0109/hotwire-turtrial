import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["example"]

  initialize() {
    console.log("コントローラがインスタンス化されました");
  }

  connect() {
    console.log("<div data-controller=lifecycle >〜</div>が描画されたり、コントローラがattachされると同時に実行される");
  }

  disconnect() {
    console.log("<div data-controller=lifecycle >〜</div>が削除されたり、コントローラがdetachされると同時に実行される");
    // this.exampleTarget.style.display = 'none'; とした場合には、実行されない
  }

  removeElement() {
    this.exampleTarget.remove();
  }

  detachController() {
    this.exampleTarget.removeAttribute('data-controller');
  }

  // disconnectのタイミングでは、コントローラインスタンスは削除されない
  // ←再描画されたり再attachされた時に再利用されるため
  // 再描画されたり再attachされた時はinitializeは呼び出されない
}
