// Type definitions for gulp-sequence 1.0
// Project: https://github.com/teambition/gulp-sequence
// Definitions by: Alorel <https://github.com/Alorel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Gulp, TaskFunction } from "gulp";

declare namespace seq {
    type Step = string | string[];

    type Done = (error?: any) => void;

    function use(gulp: Gulp): typeof seq;
}

/*
Sequence functions (apart from the one returning TaskFunction) generated using the following (requires lodash for the padding):

const fnBase = `declare function seq(`;
const argPad = _.pad('', fnBase.length, ' ');
const maxArgs = 25;

const outDone = [];

for (let i = 1; i <= maxArgs; i++) {
    let def = [];
  for (let j = 1; j <= i; j++) {
      def.push(`s${j}: seq.Step`);
  }

  def.push(`done: seq.Done): void;`);
  outDone.push(def.join(`,\n${argPad}`));
}

console.log(fnBase + outDone.join(`\n${fnBase}`));
*/

declare function seq(firstTask: seq.Step, ...additionalTasks: seq.Step[]): TaskFunction;

declare function seq(s1: seq.Step, done: seq.Done): void;
declare function seq(s1: seq.Step, s2: seq.Step, done: seq.Done): void;
declare function seq(s1: seq.Step, s2: seq.Step, s3: seq.Step, done: seq.Done): void;
declare function seq(s1: seq.Step, s2: seq.Step, s3: seq.Step, s4: seq.Step, done: seq.Done): void;
declare function seq(s1: seq.Step, s2: seq.Step, s3: seq.Step, s4: seq.Step, s5: seq.Step, done: seq.Done): void;
declare function seq(
    s1: seq.Step,
    s2: seq.Step,
    s3: seq.Step,
    s4: seq.Step,
    s5: seq.Step,
    s6: seq.Step,
    done: seq.Done,
): void;
declare function seq(
    s1: seq.Step,
    s2: seq.Step,
    s3: seq.Step,
    s4: seq.Step,
    s5: seq.Step,
    s6: seq.Step,
    s7: seq.Step,
    done: seq.Done,
): void;
declare function seq(
    s1: seq.Step,
    s2: seq.Step,
    s3: seq.Step,
    s4: seq.Step,
    s5: seq.Step,
    s6: seq.Step,
    s7: seq.Step,
    s8: seq.Step,
    done: seq.Done,
): void;
declare function seq(
    s1: seq.Step,
    s2: seq.Step,
    s3: seq.Step,
    s4: seq.Step,
    s5: seq.Step,
    s6: seq.Step,
    s7: seq.Step,
    s8: seq.Step,
    s9: seq.Step,
    done: seq.Done,
): void;
declare function seq(
    s1: seq.Step,
    s2: seq.Step,
    s3: seq.Step,
    s4: seq.Step,
    s5: seq.Step,
    s6: seq.Step,
    s7: seq.Step,
    s8: seq.Step,
    s9: seq.Step,
    s10: seq.Step,
    done: seq.Done,
): void;
declare function seq(
    s1: seq.Step,
    s2: seq.Step,
    s3: seq.Step,
    s4: seq.Step,
    s5: seq.Step,
    s6: seq.Step,
    s7: seq.Step,
    s8: seq.Step,
    s9: seq.Step,
    s10: seq.Step,
    s11: seq.Step,
    done: seq.Done,
): void;
declare function seq(
    s1: seq.Step,
    s2: seq.Step,
    s3: seq.Step,
    s4: seq.Step,
    s5: seq.Step,
    s6: seq.Step,
    s7: seq.Step,
    s8: seq.Step,
    s9: seq.Step,
    s10: seq.Step,
    s11: seq.Step,
    s12: seq.Step,
    done: seq.Done,
): void;
declare function seq(
    s1: seq.Step,
    s2: seq.Step,
    s3: seq.Step,
    s4: seq.Step,
    s5: seq.Step,
    s6: seq.Step,
    s7: seq.Step,
    s8: seq.Step,
    s9: seq.Step,
    s10: seq.Step,
    s11: seq.Step,
    s12: seq.Step,
    s13: seq.Step,
    done: seq.Done,
): void;
declare function seq(
    s1: seq.Step,
    s2: seq.Step,
    s3: seq.Step,
    s4: seq.Step,
    s5: seq.Step,
    s6: seq.Step,
    s7: seq.Step,
    s8: seq.Step,
    s9: seq.Step,
    s10: seq.Step,
    s11: seq.Step,
    s12: seq.Step,
    s13: seq.Step,
    s14: seq.Step,
    done: seq.Done,
): void;
declare function seq(
    s1: seq.Step,
    s2: seq.Step,
    s3: seq.Step,
    s4: seq.Step,
    s5: seq.Step,
    s6: seq.Step,
    s7: seq.Step,
    s8: seq.Step,
    s9: seq.Step,
    s10: seq.Step,
    s11: seq.Step,
    s12: seq.Step,
    s13: seq.Step,
    s14: seq.Step,
    s15: seq.Step,
    done: seq.Done,
): void;
declare function seq(
    s1: seq.Step,
    s2: seq.Step,
    s3: seq.Step,
    s4: seq.Step,
    s5: seq.Step,
    s6: seq.Step,
    s7: seq.Step,
    s8: seq.Step,
    s9: seq.Step,
    s10: seq.Step,
    s11: seq.Step,
    s12: seq.Step,
    s13: seq.Step,
    s14: seq.Step,
    s15: seq.Step,
    s16: seq.Step,
    done: seq.Done,
): void;
declare function seq(
    s1: seq.Step,
    s2: seq.Step,
    s3: seq.Step,
    s4: seq.Step,
    s5: seq.Step,
    s6: seq.Step,
    s7: seq.Step,
    s8: seq.Step,
    s9: seq.Step,
    s10: seq.Step,
    s11: seq.Step,
    s12: seq.Step,
    s13: seq.Step,
    s14: seq.Step,
    s15: seq.Step,
    s16: seq.Step,
    s17: seq.Step,
    done: seq.Done,
): void;
declare function seq(
    s1: seq.Step,
    s2: seq.Step,
    s3: seq.Step,
    s4: seq.Step,
    s5: seq.Step,
    s6: seq.Step,
    s7: seq.Step,
    s8: seq.Step,
    s9: seq.Step,
    s10: seq.Step,
    s11: seq.Step,
    s12: seq.Step,
    s13: seq.Step,
    s14: seq.Step,
    s15: seq.Step,
    s16: seq.Step,
    s17: seq.Step,
    s18: seq.Step,
    done: seq.Done,
): void;
declare function seq(
    s1: seq.Step,
    s2: seq.Step,
    s3: seq.Step,
    s4: seq.Step,
    s5: seq.Step,
    s6: seq.Step,
    s7: seq.Step,
    s8: seq.Step,
    s9: seq.Step,
    s10: seq.Step,
    s11: seq.Step,
    s12: seq.Step,
    s13: seq.Step,
    s14: seq.Step,
    s15: seq.Step,
    s16: seq.Step,
    s17: seq.Step,
    s18: seq.Step,
    s19: seq.Step,
    done: seq.Done,
): void;
declare function seq(
    s1: seq.Step,
    s2: seq.Step,
    s3: seq.Step,
    s4: seq.Step,
    s5: seq.Step,
    s6: seq.Step,
    s7: seq.Step,
    s8: seq.Step,
    s9: seq.Step,
    s10: seq.Step,
    s11: seq.Step,
    s12: seq.Step,
    s13: seq.Step,
    s14: seq.Step,
    s15: seq.Step,
    s16: seq.Step,
    s17: seq.Step,
    s18: seq.Step,
    s19: seq.Step,
    s20: seq.Step,
    done: seq.Done,
): void;
declare function seq(
    s1: seq.Step,
    s2: seq.Step,
    s3: seq.Step,
    s4: seq.Step,
    s5: seq.Step,
    s6: seq.Step,
    s7: seq.Step,
    s8: seq.Step,
    s9: seq.Step,
    s10: seq.Step,
    s11: seq.Step,
    s12: seq.Step,
    s13: seq.Step,
    s14: seq.Step,
    s15: seq.Step,
    s16: seq.Step,
    s17: seq.Step,
    s18: seq.Step,
    s19: seq.Step,
    s20: seq.Step,
    s21: seq.Step,
    done: seq.Done,
): void;
declare function seq(
    s1: seq.Step,
    s2: seq.Step,
    s3: seq.Step,
    s4: seq.Step,
    s5: seq.Step,
    s6: seq.Step,
    s7: seq.Step,
    s8: seq.Step,
    s9: seq.Step,
    s10: seq.Step,
    s11: seq.Step,
    s12: seq.Step,
    s13: seq.Step,
    s14: seq.Step,
    s15: seq.Step,
    s16: seq.Step,
    s17: seq.Step,
    s18: seq.Step,
    s19: seq.Step,
    s20: seq.Step,
    s21: seq.Step,
    s22: seq.Step,
    done: seq.Done,
): void;
declare function seq(
    s1: seq.Step,
    s2: seq.Step,
    s3: seq.Step,
    s4: seq.Step,
    s5: seq.Step,
    s6: seq.Step,
    s7: seq.Step,
    s8: seq.Step,
    s9: seq.Step,
    s10: seq.Step,
    s11: seq.Step,
    s12: seq.Step,
    s13: seq.Step,
    s14: seq.Step,
    s15: seq.Step,
    s16: seq.Step,
    s17: seq.Step,
    s18: seq.Step,
    s19: seq.Step,
    s20: seq.Step,
    s21: seq.Step,
    s22: seq.Step,
    s23: seq.Step,
    done: seq.Done,
): void;
declare function seq(
    s1: seq.Step,
    s2: seq.Step,
    s3: seq.Step,
    s4: seq.Step,
    s5: seq.Step,
    s6: seq.Step,
    s7: seq.Step,
    s8: seq.Step,
    s9: seq.Step,
    s10: seq.Step,
    s11: seq.Step,
    s12: seq.Step,
    s13: seq.Step,
    s14: seq.Step,
    s15: seq.Step,
    s16: seq.Step,
    s17: seq.Step,
    s18: seq.Step,
    s19: seq.Step,
    s20: seq.Step,
    s21: seq.Step,
    s22: seq.Step,
    s23: seq.Step,
    s24: seq.Step,
    done: seq.Done,
): void;
declare function seq(
    s1: seq.Step,
    s2: seq.Step,
    s3: seq.Step,
    s4: seq.Step,
    s5: seq.Step,
    s6: seq.Step,
    s7: seq.Step,
    s8: seq.Step,
    s9: seq.Step,
    s10: seq.Step,
    s11: seq.Step,
    s12: seq.Step,
    s13: seq.Step,
    s14: seq.Step,
    s15: seq.Step,
    s16: seq.Step,
    s17: seq.Step,
    s18: seq.Step,
    s19: seq.Step,
    s20: seq.Step,
    s21: seq.Step,
    s22: seq.Step,
    s23: seq.Step,
    s24: seq.Step,
    s25: seq.Step,
    done: seq.Done,
): void;

export = seq;
