Page: {
    title: (parent: { title: string }) => parent.title,
        controls: (parent: { controls: {}[] }) => parent.controls
    },
    Controls: {
        __resolveType(obj: { type: string }) {
        if (obj.type === "static") {
            return "Static";
        }

        if (obj.type === "edit") {
            return "Edit";
        }

        if (obj.type === "button") {
            return "Button";
        }

        return null;
        }
    },
    Static: {
        text: (parent: { text: string }) => parent.text,
        fromServer: (parent: { textFromServer: boolean }) => parent.textFromServer
    }
}
