imports "package_utils" from "devkit";

require(REnv);

# set input/export
const vignettes   = `${dirname(@dir)}/vignettes`;
const app_dir     = @HOME;
const clr_modules = ["REnv.dll" "Rlapack.dll" "roxygenNet.dll" "Rserve.dll" "Rserver.dll"
                     "Rstudio.dll" "signalKit.dll" "snowFall.dll" "webKit.dll" "base.dll"
                     "devkit.dll" "graphics.dll" "igraph.dll" "MLkit.dll" "njl.dll"
                     "npy.dll" "nts.dll" "Parallel.dll" "RData.dll"];

const index = list();

for(dll_name in clr_modules) {
    let libs = [];

    str(dll_name);

    # generates the html help documents
    for(pkg_namespace in package_utils::parseDll(dll = `${app_dir}/${dll_name}`)) {
        const libname = [pkg_namespace]::namespace;

        try({
            Rdocuments(pkg_namespace, 
                outputdir = `${vignettes}/${basename(dll_name)}/${libname}`, 
                package = "R");
            libs = append(libs, libname);
        });
    }
    
    index[[basename(dll_name)]] = {
        dll_name: basename(dll_name),
        libs: libs
    };

    NULL;
}

str(index);

let index_html = index 
# filter empty clr modules
|> which(pkg -> length(pkg$libs) > 0) 
|> lapply(function(pkg) {
    const [dll_name, libs] = pkg;
    const lib_urls = `<li><a href="./vignettes/${dll_name}/${libs}.html">${libs}</a></li>`;

    `<h2>${dll_name}.dll</h2>
    
    <ul>
        ${paste(lib_urls, sep = "")}
    </ul>`;
});

writeLines(index_html, con = `${dirname(@dir)}/index.html`);