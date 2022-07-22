import JSConfetti from 'js-confetti';

const jsConfetti = new JSConfetti();

export function confetti() {
  jsConfetti.addConfetti({
    confettiColors: [
      '#FFFF99',
      '#FFF083',
      '#FFE26D',
      '#FFD357',
      '#FFC542',
      '#FFB62C',
      '#FFA816',
      '#FF9900',
    ],
    confettiNumber: 500,
    // emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    // confettiRadius: 20,
  });
}
