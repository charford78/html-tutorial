$().ready(() => {
    $("input").css("border-radius", "7px");
    
    $("#remove").on("click", () => {
        console.log("Delete product ...");
    })

    getProductByPk();
});

const getProductByPk = () => {
    let id = getUrlId();
    $.getJSON(`http://localhost:54800/api/products/${id}`)
        .done(
            res => {
                console.log(res);
                display(res);
            })
        .fail(
            err => {
                console.error(err);
            });
}

const display = (product) => {
    $("#xid").val(product.id);
    $("#xpartNbr").val(product.partNbr);
    $("#xname").val(product.name);
    $("#xprice").val(product.price);
    $("#xunit").val(product.unit);
    $("#xvendor").val(product.vendor.name);
}

