/**
 * Displays a toast notification
 * @param {string} message - The message to display
 * @param {"success"|"error"|"info"} [type="info"] - Type of toast
 * @param {number} [duration=3000] - Display duration in milliseconds
 * @param {string} [position="top-right"] - Position of the toast container
 */
export function showToast(message, type = "info", duration = 3000, position = "bottom-right") {
  // Check for existing container
  let container = document.querySelector(`.toast-container.${position}`);

  // Automatically create container if it doesn't exist
  if (!container) {
    container = document.createElement("div");
    container.className = `toast-container ${position}`;
    document.body.appendChild(container);
  }

  // Create the toast element
  const toast = document.createElement("div");
  toast.classList.add("toast", `toast-${type}`);
  toast.textContent = message;

  // Add the toast to the container
  container.appendChild(toast);

  // Remove the toast after the given duration
  setTimeout(() => {
    toast.remove();

    // Remove the container if empty
    if (container.children.length === 0) {
      container.remove();
    }
  }, duration);
}
