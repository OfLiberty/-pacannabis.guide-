<template>
    <div>
        <ul class="list-unstyled">
            <li><a href="/guide/dispensaries/beyond-hello/">Beyond Hello</a></li>
            <li><a href="/guide/dispensaries/columbia-care/">Columbia Care PA, LLC</a></li>
            <li><a href="/guide/dispensaries/cresco-yeltrah/">Cresco Yeltrah</a></li>
            <li><a href="/guide/dispensaries/cure-pennsylvania/">Cure Pennsylvania</a></li>
            <li><a href="/guide/dispensaries/harvest-of-reading/">Harvest of Reading</a></li>
            <li><a href="/guide/dispensaries/herbology/">Herbology</a></li>
            <li><a href="/guide/dispensaries/ilera-healthcare/">Ilera Healthcare</a></li>
            <li><a href="/guide/dispensaries/justice-grown/">Justice Grown</a></li>
            <li><a href="/guide/dispensaries/keystone-canna-remedies/">Keystone Canna Remedies</a></li>
            <li><a href="/guide/dispensaries/keystone-center-of-integrative-wellness/">Keystone Center of Integrative Wellness</a></li>
            <li><a href="/guide/dispensaries/keystone-shops/">Keystone Shops</a></li>
            <li><a href="/guide/dispensaries/knox-medical/">Knox Medical</a></li>
            <li><a href="/guide/dispensaries/liberty/">Liberty</a></li>
            <li><a href="/guide/dispensaries/maitri-medicinals/">Maitri Medicinals</a></li>
            <li><a href="/guide/dispensaries/mission-pennsylvania-ii/">Mission Pennsylvania II, LLC</a></li>
            <li><a href="/guide/dispensaries/natures-medicines/">Nature's Medicines</a></li>
            <li><a href="/guide/dispensaries/organic-remedies/">Organic Remedies</a></li>
            <li><a href="/guide/dispensaries/restore-integrative-wellness-center/">Restore Integrative Wellness Center, LLC</a></li>
            <li><a href="/guide/dispensaries/rise/">RISE</a></li>
            <li><a href="/guide/dispensaries/solevo/">Solevo</a></li>
            <li><a href="/guide/dispensaries/terravida-holistic-centers/">TerraVida Holistic Centers</a></li>
            <li><a href="/guide/dispensaries/the-healing-center/">The Healing Center, LLC</a></li>
        </ul>
    </div>

</template>

<script>
// import dispensaries from '../data/pa-dispensaries.json'
export default {
    name: 'dispensaries',
    data () {
        return {
            // dispensaries: dispensaries,
        }
    },
    computed:{
        
    }
}
</script>
<style>
    /* #county{ 
        width: 100%;
    } */
    label{
        float:left;
        width: 30%;
        text-align: right;
        padding: 0px 1em;

    }
    select{
        float:left;
        width: 60%;
        padding: 0px 1em;

    }
    .filter{
        padding: 1em 0px;
    }
    .clearfix{
        clear:both;
    }
    .results{
        padding: 1em;
    }

    @media only screen and (min-width: 1px) and (max-width: 700px){
        label{
            float:left;
            width: auto;
            text-align: center;
            padding: .3em 0px;

        }
        select{
            float:left;
            width: 100%;
            padding: .3em 0px;

        }
    }
</style>
