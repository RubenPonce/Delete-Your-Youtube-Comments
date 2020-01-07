let menuBoxCounter = 8 //+9
let menuCounter = 0

let setupScript = async () => {
    let boxes = document.querySelectorAll(".style-scope .ytd-comment-history-entry-renderer")
    let boxOptions = document.querySelectorAll("[role='option'][tabindex='0'][aria-disabled='false']")
    let menuBoxes = document.querySelectorAll("[aria-label='Action menu']")
    let deleteButtonOnModal = document.querySelector("[id='button'][class='style-scope yt-button-renderer style-text size-default'][role='button'][tabindex='0'][animated=''][elevation='0'][aria-disabled='false'][aria-label='Delete']")

    const pressMenu = async () => {
        await boxes[menuBoxCounter].setAttribute("menu-active", true)
        setTimeout(() => null, 100)
        await menuBoxes[menuCounter].click()
        menuBoxCounter += 9
        menuCounter += 1
    }

    const pressBoxOptionDelete = async () => {
        await setTimeout(async () => {
            boxOptions = document.querySelectorAll("[role='option'][tabindex='0'][aria-disabled='false']")
            if (boxOptions.length > 1 && boxOptions) {
                await boxOptions[1].click()
            } else if (boxOptions) {

                await boxOptions[0].click()
            }
        }, 100)

    }

    const pressDeleteButtonOnModal = async () => {
        await setTimeout(async () => {
            deleteButtonOnModal = document.querySelector("[id='button'][class='style-scope yt-button-renderer style-text size-default'][role='button'][tabindex='0'][animated=''][elevation='0'][aria-disabled='false'][aria-label='Delete']")
            if (deleteButtonOnModal) {
                await deleteButtonOnModal.click()
            }
        }, 100)

    }

    await Promise.all([pressMenu(), pressBoxOptionDelete(), pressDeleteButtonOnModal()])
}

window.setInterval(setupScript, 400)
