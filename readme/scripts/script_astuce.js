
	var LANG_FR = "fr";

	var hintTable = [];
	hintTable[LANG_FR] = 
	[
		"Une douzaine de quêtes secondaires à jouer.",
		"Un bestiaire inspiré des éditions papier et proposant de nouvelles créatures dans l'univers de BG2.",
		"Plus d'une centaine de cartes, dont des nouvelles.",
		"De nouvelles animations de créatures : licornes, chevaux, démons, gargouilles...",
		"De nouveaux sortilèges divins et profanes.",
		"Des dragons métalliques, cristallins, planaires...",
		"Des démons et des diables qui profitent du chaos semé dans le Royaume de Diamant Éternel pour y exporter leur Guerre Sanglante.",
		"Une horde de vampires qui feraient passer Bodhi pour une fillette capricieuse.",
		"Des chevaliers morts-vivants au comportement toujours aussi rigide dans l'Au-delà."
	];

	var hintIdx = 0;

	function showNextHint(lang, textId) {
		var hints = hintTable[lang];
		if (hints.length > 0) {
			var elem = document.getElementById(textId);
			if ('textContent' in elem) {
				elem.textContent = hints[hintIdx];
			} else {
				elem.innerText = hints[hintIdx];
			}
		hintIdx = (hintIdx + 1) % hints.length;
		}
	}

	function showHints(boxId, lang, textId) {
		document.getElementById(boxId).style.display = "block";
		showNextHint(lang, textId);
	}

	function showSpoiler(obj) {
		var inner = obj.parentNode.getElementsByTagName("div")[0];
		if (inner.style.display == "none")
			inner.style.display = "";
		else
		inner.style.display = "none";
		}
