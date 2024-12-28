<script>
    // General stuff
    import { onMount } from "svelte";
    import { marked } from "marked";
    import { goto } from "$app/navigation"
    // AI stuff
    import { GoogleGenerativeAI } from "@google/generative-ai";    
    const genAI = new GoogleGenerativeAI(import.meta.env.GEMINI_API_KEY);
    const client = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    // Extra functions
    import { initialAnalysis } from "$lib"
    // Components
    import Map from "$lib/components/Map.svelte";
    
    function nextPage() {
        const locationInput = document.getElementsByClassName("mapboxgl-ctrl-geocoder--input")[0];
        if (locationInput) {
            const location = locationInput.value;
            localStorage.setItem("location", location);
            goto("/chat")
        }
    }
</script>

<h1 class="font-bold text-4xl text-white">CitySmart - THE Smart City Planner</h1>
<br>
<Map></Map>
<div id="buttons" class="fixed bottom-10 left-0">
    <p class="text-sm text-white ">Search the place you want to know about and press the button!</p>
    <br>
    <button class=" border-4 border-black rounded-lg bg-white p-1" on:click={nextPage}>Continue</button>
</div>