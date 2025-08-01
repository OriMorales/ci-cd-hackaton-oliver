import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";
import Section from "./Section.jsx";

export default function CoreConcepts() {
    return (
        <Section id="core-concepts" title="Core Concepts">
            <ul>
            {
                CORE_CONCEPTS.map((conceptItem) => 
                (<CoreConcept key={conceptItem.title} {...conceptItem} />  )) 
            }
        
            {/* <CoreConcept 
                title={ CORE_CONCEPTS[0].title } 
                description={CORE_CONCEPTS[0].description} 
                image = {CORE_CONCEPTS[0].image} />
        
                <CoreConcept {...CORE_CONCEPTS[1]} />
                <CoreConcept {...CORE_CONCEPTS[2]} />
                <CoreConcept {...CORE_CONCEPTS[3]} /> */}
            </ul>
        </Section>
    );
}