# Style Guide for DnD Beyond Template

This is a helpful little guide so you can see and know how to use this template for all your homebrew needs. 

## Markdown 

Headings, paragraphs, bullets, numbering, and even tables are all use as normal. 

### Headings



```
# heading 1
## heading 2
### heading 3
#### heading 4
##### heading 5
```



# heading 1
## heading 2
### heading 3
#### heading 4
##### heading 5

### Lists

#### Unordered



```
* backpack
* touch
* shovel
```
Or

```
- bedroll
- lamp
- rope
```

+++



* backpack
* touch
* shovel

Or

- bedroll
- lamp
- rope

#### Ordered



```
1. Discover BBEG's plot
2. Prepare to stop them
3. ???
4. Profit
```



1. Discover BBEG's plot
2. Prepare to stop them
3. ???
4. Profit
+++
### Table

```
| Potion of...     | Rarity    | HP Regained |
| :---             | :---:     | ---:        |
| Healing          | Common    | 2d4 + 2     |
| Greater Healing  | Uncommon  | 4d4 + 4     |
| Superior Healing | Rare      | 8d4 + 8     |
| Supreme Healing  | Very rare | 10d4 + 20   |
```

| Potion of...     | Rarity    | HP Regained |
| :---             | :---:     | ---:        |
| Healing          | Common    | 2d4 + 2     |
| Greater Healing  | Uncommon  | 4d4 + 4     |
| Superior Healing | Rare      | 8d4 + 8     |
| Supreme Healing  | Very rare | 10d4 + 20   |

### Links

###### Wikilink

```
If the characters don't approach the tower from the north skip to [[chapter 3]].
```

If the characters don't make their approach to the tower from the north skip to chapter 3.

###### Monster Link

```
As the characters approach the tower, three [cats](https://www.dndbeyond.com/monsters/cat) appear from behind a barrel.
```

As the characters approach the tower, three [cats](https://www.dndbeyond.com/monsters/cat) appear from behind a barrel.

###### Magic Item

```
*[immovable rod]: This flat iron rod has a button on one end. You can use an action to press the button, which causes the rod to become magically fixed in place. Until you or another creature uses an action to push the button again, the rod doesn't move, even if it is defying gravity. The rod can hold up to 8,000 pounds of weight. More weight causes the rod to deactivate and fall. A creature can use an action to make a DC 30 Strength check, moving the fixed rod up to 10 feet on a success.

Never leave home without your [%magic-item][immovable rod](https://www.dndbeyond.com/magic-items/immovable-rod).
```

*[immovable rod]: This flat iron rod has a button on one end. You can use an action to press the button, which causes the rod to become magically fixed in place. Until you or another creature uses an action to push the button again, the rod doesn't move, even if it is defying gravity. The rod can hold up to 8,000 pounds of weight. More weight causes the rod to deactivate and fall. A creature can use an action to make a DC 30 Strength check, moving the fixed rod up to 10 feet on a success.

Never leave home without your <span class="magic-item"></span>[immovable rod](https://www.dndbeyond.com/magic-items/immovable-rod).

###### Spell

	If a character cast [%spell][fireball](https://www.dndbeyond.com/spells/fireball), then the letter containing the cypher burns up completely.

If a character cast <span class="spell"></span>[fireball](https://www.dndbeyond.com/spells/fireball), then the letter containing the cypher burns up completely. 

## Special Formatting

The special formatting uses iA Writer's metadata tagging system and html with css classes to achieve the special text blocks. 

The metadata tags are put at the top of the document between triple dashes. I assign the variables to value of a `<div>` with an inline style with the class name of the special formatting. Because these are all div's, they require a closing tag `</div>`, that I set to `[%end]`.

```
---
PCname: Orc Ick
---
You see, across the tavern, knocking back pint after pint of ale [%name].
```



 You see, across the tavern, knocking back pint after pint of ale .

### Read out Loud
The read out loud uses the `[%quote]` variable matched to `<div class="text--quote-box">`. 



```
---
quote:<div class="text--quote-box">
end:</div>
---
[%quote]
As you approach the tower, you begin to notice the white stone is in fact not stone. This tower appears to be constructed from bone. From the bones of dead people. 
[%end]
```




As you approach the tower, you begin to notice the white stone is in fact not stone. This tower appears to be constructed from bone. From the bones of dead people.
</div>

### Rules Note

This special formatting requires some *extra* special markdown. Because I'm targeting the `p::first-child` you have to manually wrap the first line in the `<p></p>` element tags, and wrapping the other paragraphs here helps keep everything nice and tidy. ¯\\\_(ツ)\_/¯



```
---
note: <div class="text--rules-sidebar">
---
[%note]
<p>
Character Advancement
</p>
<p>
By the characters reach this section of this adventure, they should be at about 21st level. If they aren't then make sure the players have a back-up character ready to go. And maybe a back-up to the back-up just to be safe. I'm mean you don't really expect them to be able to defeat the **cat**.
</p>
[%end]
```



<div class="text--rules-sidebar">
<p>
Character Advancement
</p>
<p>
By the characters reach this section of this adventure, they should be at about 21st level. If they aren't then make sure the players have a back-up character ready to go. And maybe a back-up to the back-up just to be safe. I'm mean you don't really expect them to be able to defeat the **Elder Brain Cat**.
</p>
</div>

### Epigraph (un-signed)



```
---
epigraph:<div class="epigraph">
epigraph-author:<div class="epigraph--with-author">
group-name: Mettle Sum
BBEG: Elder Brain Cat, Ksam
end:</div>
---
[%epigraph-author]
<p>
Dear [%group-name],
</p>
<p>
It has come to my attention that you plan to interfere with the plans that I have so carefully crafted. I would advise you to not do this. The surgeon general has declared that doing so could be hazardous to your health. 
</p>
<p>
Sincerly,<br />
[%BBEG]
</p>
[%end]
```

<div class="epigraph">
<p>
Dear Elder Brain Cat, Ksam,
</p>
<p>
It has been three months and we are just know learning that you have a needlessly silent "k" at the front of your name. This is the last straw. We could have maybe let the genocide slide, or the unbearable taxes on the already down-trodden, and even the outlawing of dogs and dog-like creatures. But we cannot stand idly by whilst a depraved creature such as yourself goes around calling itself "Ksam". Prepare to die.
</p>
</div>

### Epigraph (Signed)


```
---
epigraph:<div class="epigraph">
epigraph-author:<div class="epigraph--with-author">
group-name: Mettle Sum
BBEG: Elder Brain Cat, Ksam
end:</div>
---
[%epigraph-author]
<p>
Dear [%group-name],
</p>
<p>
It has come to my attention that you plan to interfere with the plans that I have so carefully crafted. I would advise you to not do this. The surgeon general has declared that doing so could be hazardous to your health. 
</p>
<p>
Sincerly,<br />
[%BBEG]b
</p>
[%end]
```



<div class="epigraph--with-author">
<p>
Dear Mettle Sum,
</p>
<p>
It has come to my attention that you plan to interfere with the plans that I have so carefully crafted. I would advise you to not do this. The surgeon general has declared that doing so could be hazardous to your health. 
</p>
<p>
Sincerly,<br />
Elder Brain Cat, Ksamb
</p>
</div>