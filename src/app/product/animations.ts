import {
  trigger,
  style,
  animate,
  transition,
  state,
  keyframes
} from "@angular/animations";

export const fade = [
  trigger("fade", [
    state("in", style({ opacity: "1" })),
    state("out", style({ opacity: "0.9" })),
    transition("* <=> *", [
      animate(
        "150ms ease-in-out",
        keyframes([style({ opacity: "0.9" }), style({ opacity: "1" })])
      )
    ])
  ])
];
