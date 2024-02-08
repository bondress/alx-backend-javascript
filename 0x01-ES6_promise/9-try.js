export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const outpt = mathFunction();
    queue.push(outpt);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
