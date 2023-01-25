let sleep = time => new Promise(res => setTimeout(res, time, "done sleeping"));

async function work() {
  let buttons = [...document.querySelectorAll("c-wiz .GqCJpe.u2cbPc.LDk2Pd .VfPpkd-Bz112c-LgbsSe.yHy1rc.eT1oJ.mN1ivc")];
  console.log("Deleting " + buttons.length + " comments");
	for (let b of buttons) {
    console.log("Hit");
    b.click();
    await sleep(2000);
  }
  console.log("End. Scrolling...")
  window.scrollTo(0, document.body.scrollHeight);
}

async function run() {
  while (true) {
    await work();
    await sleep(10000);
  }
}

run();
