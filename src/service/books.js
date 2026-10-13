

export async function getListBooks(url){
try {

    const res = await fetch(url)

    if(!res.ok)throw new Error("Dados não retornaram");
    const list = await res.json();
    return list.results;
    
} catch (error) {
    console.error("Falha ao buscar lista de filmes: ", error);
    return false;
}

}