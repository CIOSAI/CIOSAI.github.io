<script lang="ts">
  import Funky from '$lib/Funky.svelte';
  import { onMount } from 'svelte';
  import { base } from '$app/paths';

  const EDITION = "250706"

  let detail:Object|null = null;

  function parseDate(source:string): Date {
    return new Date(source);
  }

  onMount(() => {
    const url = `${base}/shorthairDetails/${EDITION}.json`;
    fetch(url).then((response) => response.json()).then((json) => {
      detail = json;
    });
  })
</script>

<div class="flex flex-wrap items-center gap-6">
    <h1 class="text-indigo-950 dark:text-slate-200 text-lg">短毛新媒體小聚</h1>
    <a class="hover:italic text-pink-700 dark:text-orange-400" href="en">English version</a>
</div>
<div class="h-12"></div>
<h4 class="text-indigo-950 dark:text-slate-200 text-base sm:px-12">短毛是石獅爲了聚集“用程式創作的藝術家”建立的社群。如果你對 Demoscene、新媒體、電腦圖學、演算藝術等話題有興趣的話，歡迎一起來玩！</h4>
<h4 class="text-indigo-950 dark:text-slate-200 text-base sm:px-12">目前轉生成<a class="hover:italic text-pink-700 dark:text-orange-400" href="https://ciosai.github.io/operator-digitalfest/">運算子數位藝術節</a></h4>
<h4 class="text-base sm:px-12"><a class="hover:italic text-pink-700 dark:text-orange-400" href="https://www.youtube.com/watch?v=Z7Ce2SOAFLc" target="_blank">成果可以在 Youtube 上看喔</a></h4>
<div class="h-12"></div>

{#if !detail}
<h4 class="text-indigo-950 dark:text-slate-200 text-base italic">查詢中 OwO</h4>
<div class="h-svh"></div>
{:else}
<div class="border-indigo-950 dark:border-slate-200 sm:m-12 grid grid-cols-1 sm:grid-cols-2">
    <div class="info">
        <h4 class="text-indigo-950 dark:text-slate-200 text-base italic">什麼時候？</h4>
        <p class="text-indigo-950 dark:text-slate-200 text-base pl-4 sm:pl-12">{
          parseDate(detail["when"]["date"]).toLocaleString("zh-TW", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric"
          })
        }<br>{detail["when"]["timeFrom"]} - {detail["when"]["timeUntil"]}</p>

        <h4 class="text-indigo-950 dark:text-slate-200 text-base italic">在哪裡？</h4>
        <p class="text-indigo-950 dark:text-slate-200 text-base pl-4 sm:pl-12">{detail["where"]}</p>
        {#if detail.hasOwnProperty("whereBeware")}
        <p class="text-indigo-950 dark:text-slate-200 text-sm pl-4 sm:pl-12 italic">{detail["whereBeware"]}</p>
        {/if}

        <h4 class="text-indigo-950 dark:text-slate-200 text-base italic">要幹嘛？</h4>
        {#each detail["what"] as segment}
            <p class="text-indigo-950 dark:text-slate-200 text-base pl-4 sm:pl-12">{
                segment["timeFrom"] + " - " + segment["timeUntil"]
            } : {segment["detail"]}{#if segment["hosts"].length>0}{" by "+segment["hosts"].join(", ")}{/if}</p>
        {/each}

        <h4 class="text-indigo-950 dark:text-slate-200 text-base italic">跟上最新消息</h4>
        <p class="text-indigo-950 dark:text-slate-200 text-base pl-4 sm:pl-12">最即時的更新會<a class="underline hover:italic" href="https://discord.gg/haBxT6WxgD">在 Discord 上</a></p>
        <p class="text-indigo-950 dark:text-slate-200 text-sm pl-4 sm:pl-12 italic">連結炸掉的話請 email 我</p>
        <p class="text-indigo-950 dark:text-slate-200 text-base pl-4 sm:pl-12">這個頁面也會儘量跟上進度但我下班有空才會更新</p>

        <h4 class="text-indigo-950 dark:text-slate-200 text-base italic">聯絡石獅</h4>
        <p class="text-indigo-950 dark:text-slate-200 text-base pl-4 sm:pl-12">jyinteractive.tw@gmail.com</p>
        <p class="text-indigo-950 dark:text-slate-200 text-base pl-4 sm:pl-12">Telegram: ciosai_tw</p>
        <p class="text-indigo-950 dark:text-slate-200 text-base pl-4 sm:pl-12">Discord: dubious_creecher (有加 Discord 的話直接 @ 我)</p>
<!--
        <div class="h-12"></div>
        <h4 class="text-indigo-950 dark:text-slate-200 text-base"><s>以上細節可能還會調整，</s>時間地點都確定了！謝謝大家的耐心。有建議的話也歡迎聯絡。</h4> -->
    </div>
    <div class="register">
        <div class="flex flex-wrap items-center gap-6">
            <h1 class="text-indigo-950 dark:text-slate-200 text-lg">來報名！</h1>
        </div>

        {#each detail["howToJoin"] as method, index}
            <a class="text-indigo-950 dark:text-slate-200 text-base pl-4 sm:pl-12 underline hover:italic" href="{method["url"]}">
                {method["display"]}
            </a>
            {#if method["instruction"]}
                <p class="text-indigo-950 dark:text-slate-200 whitespace-pre-line text-base pl-12 sm:pl-20">{method["instruction"]}</p>
            {/if}
            {#if index!==detail["howToJoin"].length-1}
                <p class="text-indigo-950 dark:text-slate-200 text-base italic">或</p>
            {/if}
        {/each}
    </div>

</div>
{/if}

<Funky/>

<div class="h-12"></div>
