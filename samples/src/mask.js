import $ from "jqmin";
import Mask from "../../src/AX6UIMask";
import "../../src/AX6UIMask/style.scss";


const $body = $("#sample-body");
let el = `

<div id="making-div" style="height:500px;background: #ccc;">making div</div>
<br/>
<a class="waves-effect waves-light btn" data-btn="mask">Open Mask</a>
<a class="waves-effect waves-light btn" data-btn="mask-content">Open Mask(with content)</a>
<a class="waves-effect waves-light btn" data-btn="mask-div">Open Mask(masking)</a>
`;
$body.append(el);


/////~~~~~~~~~~~~~~~~~~
let myMask = new Mask();

myMask.setConfig({
  zIndex: 1000,
  onStateChanged: function () {
    console.log(this);
  }
});

myMask.onClick = function () {
  console.log(this);
  myMask.fadeOut();
};

$body.on("click", '[data-btn]', (e) => {
  let btn = e.currentTarget.getAttribute("data-btn");
  let processor = {
    mask() {
      myMask.open();
    },
    "mask-content"() {
      myMask.open({
        content: "MASK CONTENT"
      });
    },
    "mask-div"() {
      myMask.open({
        target: $('#making-div')
      });
    }
  };

  if (btn in processor) {
    processor[btn]();
  }
});

