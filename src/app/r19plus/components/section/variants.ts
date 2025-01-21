export function variants(delay = 0) {
  return {
    initial: {y: 60, opacity: 0},
    whileInView: {y: 0, opacity: 1},
    transition: {duration: 0.5, delay: delay},
    viewport: {once: true}
  }
}