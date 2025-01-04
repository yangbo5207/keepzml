import {useState} from 'react'
import {_c} from './useCache'
import Expensive from './expensive'

export default function App() {
  const $ = _c(14);

  if ($[0] !== "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac") {
    for (let $i = 0; $i < 13; $i += 1) {
      $[$i] = Symbol.for("react.memo_cache_sentinel");
    }
    $[0] = "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac";
  }

  const [counter, setCounter] = useState(0);
  let t0;

  if ($[13] !== counter) {
    t0 = function __clickHanler() {
      setCounter(counter + 1);
    };

    $[13] = counter;
    $[1] = t0;
  } else {
    t0 = $[13];
  }

  const __clickHanler = t0;
  let t1;

  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = <div>A Expensive Case</div>;
    $[2] = t1;
  } else {
    t1 = $[2];
  }

  let t2;

  if ($[3] !== counter) {
    t2 = <div className="counter">current counter is: {counter}</div>;
    $[3] = counter;
    $[4] = t2;
  } else {
    t2 = $[4];
  }

  let t3;

  if ($[5] !== __clickHanler) {
    t3 = <button onClick={__clickHanler}>counter++</button>;
    $[5] = __clickHanler;
    $[6] = t3;
  } else {
    t3 = $[6];
  }

  let t4;

  if ($[7] !== t2 || $[8] !== t3) {
    t4 = (
      <div className="flex items-center justify-between mt-4">
        {t2}
        {t3}
      </div>
    );
    $[7] = t2;
    $[8] = t3;
    $[9] = t4;
  } else {
    t4 = $[9];
  }

  let t5;

  if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = <Expensive />;
    $[10] = t5;
  } else {
    t5 = $[10];
  }

  let t6;

  if ($[11] !== t4) {
    t6 = (
      <div>
        {t1}
        {t4}
        {t5}
      </div>
    );
    $[11] = t4;
    $[12] = t6;
  } else {
    t6 = $[12];
  }

  return t6;
}
