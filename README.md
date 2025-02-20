![Mathtron](https://github.com/user-attachments/assets/cf713b6b-375c-4c50-a128-9e3a8b0ae6a4)

Math Note App build with React + Electron. Made for rendering and editing Latex. Rather programmed spontaneously since i didn't find an app that suits my needs.

# Instructions

- <kbd>Shift</kbd> + <kbd>Enter</kbd> or <kbd>Enter</kbd> to push your input fron the input area to the local storage.
- <kbd>Click</kbd>on an already pushed item and press any <kbd>key</kbd> (arrows count too) to toggle edit mode, in which Latex will be displayed unrendered.
- <kbd>Shift</kbd> + <kbd>Enter</kbd> or <kbd>Escape</kbd> in edit mode to save changes.
- New Notebooks can be created and switched via the select menu in the top left corner.

# Latex

Wrap Latex input like this: `${ /* your input here */ }$`.

Example:

```bash
110 $\times$ 10 $\ne$ 20
```

will render to:
```math
110 \times 10 \ne 20
```
