import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  // divタグを取得しslideTargetsという変数に格納
  static targets = [ "slide" ]
  
  // コントローラがインスタンス化された時に呼び出される
  // 現在のスライド(起)を表示します
  // TODO 今回はconnect()でも良いのでは？
  initialize(){
    this.showCurrentSlide()
  }

  // 進むボタン押下で実行される(イベントハンドラ)
  next(){
    this.data.set("index", parseInt(this.data.get("index")) + 1)
    this.showCurrentSlide()
  }
  
  // 戻るボタン押下で実行される(イベントハンドラ)
  previous(){
    this.data.set("index", parseInt(this.data.get("index")) - 1)
    this.showCurrentSlide()
  }
  
  showCurrentSlide(){
    this.slideTargets.forEach((el, i) => {
      // el                                                           i
      // <div data-slideshow-target="slide" class="slide">起</div>     0
      // <div data-slideshow-target="slide" class="slide">承</div>     1
      // <div data-slideshow-target="slide" class="slide">転</div>     2
      // <div data-slideshow-target="slide" class="slide">結</div>     3
      el.classList.toggle("slide--current", parseInt(this.data.get("index")) == i)
    })
  }

  // 以下リファクタリング
  // getter, setterの利用
  // next(){
  //   // get index() と set index(index)が呼び出される
  //   this.index++
  // }
  
  // previous(){
  //   // get index() と set index(index)が呼び出される
  //   this.index--
  // }
  
  // showCurrentSlide(){
  //   this.slideTargets.forEach((el, i) => {
  //     el.classList.toggle("slide--current", this.index == i) // get index()が呼び出される
  //   })
  // }

  // // indexにアクセスしたときに呼び出される
  // get index(){
  //   return parseInt(this.data.get("index"))
  // }
  
  // // indexの値を変更しようとした時に呼び出される
  // set index(index){
  //   this.data.set("index", index)
  //   this.showCurrentSlide()
  // }
}
