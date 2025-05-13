<script lang="ts">
  import Funky from '$lib/Funky.svelte';
  import { onMount } from 'svelte';
  import { base } from '$app/paths';

  const EDITION = "250511"

  let detail:Object|null = null;

  function parseDate(source:string): Date {
    return new Date(source);
  }

  onMount(() => {
    const fallback = `${base}/shorthairDetails/${EDITION}.json`;
    fetch(fallback).then((response) => response.json()).then((json) => {
      detail = json;

      const url = `${base}/shorthairDetails/${EDITION}_en.json`;
      fetch(url).then((response) => response.json()).then((json) => {
        let recursiveReplace = function(obj1, obj2): void {
          let out = {};
          for (let subject of Object.keys(obj1)) {
            if (Object.keys(obj2).includes(subject)) {
              if (Array.isArray(obj1[subject])) {
                out[subject] = obj1[subject].map((item, index) => {
                  if (typeof obj2[subject][index] === "object") {
                    return recursiveReplace(item, obj2[subject][index]);
                  }
                  else {
                    return obj2[subject];
                  }
                });
              }
              else if (typeof obj1[subject] === "object") {
                out[subject] = recursiveReplace(obj1[subject], obj2[subject]);
              }
              else {
                out[subject] = obj2[subject];
              }
            }
            else {
              out[subject] = obj1[subject];
            }
          }
          return out;
        }
        detail = recursiveReplace(detail, json);
      });
    });
  })
</script>

<div class="flex flex-wrap items-center gap-6">
    <h1 class="text-indigo-950 dark:text-slate-200 text-lg">Shorthair Newmedia Meetup</h1>
    <a class="text-indigo-950 dark:text-slate-200 text-base underline hover:italic" href="../">中文版</a>
</div>
<div class="h-12"></div>
<h4 class="text-indigo-950 dark:text-slate-200 text-base sm:px-12">Shorthair was started by CIOSAI as an effort to build a demoscene community in Taiwan. Anyone intereseted in the demoscene, newmedia art, computer graphics and algorithmic art is welcome!</h4>
<div class="h-12"></div>


{#if !detail}
<h4 class="text-indigo-950 dark:text-slate-200 text-base italic">Querying OwO</h4>
<div class="h-svh"></div>
{:else}
<div class="border-indigo-950 dark:border-slate-200 sm:m-12 grid grid-cols-1 sm:grid-cols-2">
    <div class="info">
        <h4 class="text-indigo-950 dark:text-slate-200 text-base italic">Time</h4>
        <p class="text-indigo-950 dark:text-slate-200 text-base pl-4 sm:pl-12">{
          parseDate(detail["when"]["date"]).toLocaleString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric"
          })
        }<br>{detail["when"]["timeFrom"]} - {detail["when"]["timeUntil"]}</p>

        <h4 class="text-indigo-950 dark:text-slate-200 text-base italic">Location</h4>
        <p class="text-indigo-950 dark:text-slate-200 text-base pl-4 sm:pl-12">{detail["where"]}</p>
        {#if detail.hasOwnProperty("whereBeware")}
        <p class="text-indigo-950 dark:text-slate-200 text-sm pl-4 sm:pl-12 italic">{detail["whereBeware"]}</p>
        {/if}

        <h4 class="text-indigo-950 dark:text-slate-200 text-base italic">What will we do?</h4>
        {#each detail["what"] as segment}
            <p class="text-indigo-950 dark:text-slate-200 text-base pl-4 sm:pl-12">{
                segment["timeFrom"] + " - " + segment["timeUntil"]
            } : {segment["detail"]}{#if segment["hosts"].length>0}{" by "+segment["hosts"].join(", ")}{/if}</p>
        {/each}

        <h4 class="text-indigo-950 dark:text-slate-200 text-base italic">Keep updated</h4>
        <p class="text-indigo-950 dark:text-slate-200 text-base pl-4 sm:pl-12"><a class="underline hover:italic" href="https://discord.gg/haBxT6WxgD">the Discord group</a> will be more closely up to date</p>
        <p class="text-indigo-950 dark:text-slate-200 text-sm pl-4 sm:pl-12 italic">if the link is dead please contact me</p>
        <p class="text-indigo-950 dark:text-slate-200 text-base pl-4 sm:pl-12">this page will also be updated but only when I have time to <span class="text-nowrap">:(</span></p>

        <h4 class="text-indigo-950 dark:text-slate-200 text-base italic">Contact CIOSAI</h4>
        <p class="text-indigo-950 dark:text-slate-200 text-base pl-4 sm:pl-12">jyinteractive.tw@gmail.com</p>
        <p class="text-indigo-950 dark:text-slate-200 text-base pl-4 sm:pl-12">Telegram: ciosai_tw</p>
        <p class="text-indigo-950 dark:text-slate-200 text-base pl-4 sm:pl-12">Discord: dubious_creecher (just @ me if you are in the group)</p>

        <!-- <div class="h-12"></div>
        <h4 class="text-indigo-950 dark:text-slate-200 text-base"><s>All details are subject to change as of now, </s> Place and time have been confirmed! Suggestions are still welcome</h4> -->
    </div>
    <div class="register">
        <div class="flex flex-wrap items-center gap-6">
            <h1 class="text-indigo-950 dark:text-slate-200 text-lg">Register!</h1>
        </div>

        {#each detail["howToJoin"] as method, index}
            <a class="text-indigo-950 dark:text-slate-200 text-base pl-4 sm:pl-12 underline hover:italic" href="{method["url"]}">
                {method["display"]}
            </a>
            {#if index!==detail["howToJoin"].length-1}
                <p class="text-indigo-950 dark:text-slate-200 text-base italic">or</p>
            {/if}
        {/each}
    </div>

</div>
{/if}

<Funky/>

<div class="h-12"></div>
