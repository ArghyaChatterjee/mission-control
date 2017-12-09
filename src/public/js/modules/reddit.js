import {
    get,
    post
    } from './fetchival_wrapper';

/**
 * save a certain section to reddit
 *
 * triggered when an "upload" button is clicked
 */
export function save() {
    const elem = arguments[0].element;

    post('update', {
        id: elem.id,
        value: elem.value
    }, {
        responseAs: 'text'
    });
}

/**
 * save events section
 *
 * needs to be handled differently because it needs parsing
 */
export function saveEvents() {
    const events = document.getElementById('events').children;

    let allEvents = [];

    // go through all rows
    for(const evnt of events) {
        const children = evnt.children;

        // we need to tell if it's posted or not
        const posted = children[1].getAttribute('data-content') === 'Posted';

        // T±time (left column)
        const tPM = children[3].value === '' ? '' : children[2].innerHTML + children[3].value.trim();

        // message in right column
        const message = children[6].innerHTML.trim();  // not actually an input, so we need innerHTML

        // we don't care about empty rows
        if(message === '')
            continue;

        // this is the format the server expects it in
        allEvents.push([posted, tPM, message]);
    }

    // save it!
    post('update', {
        id: 'events',
        value: allEvents
    }, {
        responseAs: 'text'
    });
}

/**
 * create empty post
 */
export function createPost() {
    get('update/create', {}, { responseAs: 'text' });
}
