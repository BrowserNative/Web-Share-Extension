if (navigator.share) {
    navigator.share({
        title: window.document.title,
        url: window.location.href
    }).then(() => {
    })
    .catch(err => {
        console.log(err.message);
    });
} else {
    console.log("navigator.share not supported ...")
}