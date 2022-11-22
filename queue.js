const Queue = (() => {
    let head = 0;
    let tail = 0;
    let size = 0;

    const element = {}

    const enqueue = (value) => {
        if (size === 0) {
            element[head] = value
        }else{
            element[tail] = value
        }
        size += 1
        tail += 1
    }

    const dequeue = () => {
        if (size === 0) {
            head = 0;
            tail = 0;
            return 'no more'
        }
        const value = element[head]
        delete element[head]
        head += 1
        size -= 1
        return value
    }

    const show = () => {
        return element
    }

    return {enqueue, dequeue, show}
})()
