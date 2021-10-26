import{a as t,F as e,b as n,M as r}from"./prosemirror-model.475387bc.js";import{a as o,R as i,T as s}from"./prosemirror-transform.de62111a.js";var a=Object.create(null),c=function(t,e,n){this.ranges=n||[new u(t.min(e),t.max(e))],this.$anchor=t,this.$head=e},p={anchor:{configurable:!0},head:{configurable:!0},from:{configurable:!0},to:{configurable:!0},$from:{configurable:!0},$to:{configurable:!0},empty:{configurable:!0}};p.anchor.get=function(){return this.$anchor.pos},p.head.get=function(){return this.$head.pos},p.from.get=function(){return this.$from.pos},p.to.get=function(){return this.$to.pos},p.$from.get=function(){return this.ranges[0].$from},p.$to.get=function(){return this.ranges[0].$to},p.empty.get=function(){for(var t=this.ranges,e=0;e<t.length;e++)if(t[e].$from.pos!=t[e].$to.pos)return!1;return!0},c.prototype.content=function(){return this.$from.node(0).slice(this.from,this.to,!0)},c.prototype.replace=function(e,n){void 0===n&&(n=t.empty);for(var r=n.content.lastChild,o=null,i=0;i<n.openEnd;i++)o=r,r=r.lastChild;for(var s=e.steps.length,a=this.ranges,c=0;c<a.length;c++){var p=a[c],u=p.$from,h=p.$to,f=e.mapping.slice(s);e.replaceRange(f.map(u.pos),f.map(h.pos),c?t.empty:n),0==c&&v(e,s,(r?r.isInline:o&&o.isTextblock)?-1:1)}},c.prototype.replaceWith=function(t,e){for(var n=t.steps.length,r=this.ranges,o=0;o<r.length;o++){var i=r[o],s=i.$from,a=i.$to,c=t.mapping.slice(n),p=c.map(s.pos),u=c.map(a.pos);o?t.deleteRange(p,u):(t.replaceRangeWith(p,u,e),v(t,n,e.isInline?-1:1))}},c.findFrom=function(t,e,n){var r=t.parent.inlineContent?new h(t):g(t.node(0),t.parent,t.pos,t.index(),e,n);if(r)return r;for(var o=t.depth-1;o>=0;o--){var i=e<0?g(t.node(0),t.node(o),t.before(o+1),t.index(o),e,n):g(t.node(0),t.node(o),t.after(o+1),t.index(o)+1,e,n);if(i)return i}},c.near=function(t,e){return void 0===e&&(e=1),this.findFrom(t,e)||this.findFrom(t,-e)||new m(t.node(0))},c.atStart=function(t){return g(t,t,0,0,1)||new m(t)},c.atEnd=function(t){return g(t,t,t.content.size,t.childCount,-1)||new m(t)},c.fromJSON=function(t,e){if(!e||!e.type)throw new RangeError("Invalid input for Selection.fromJSON");var n=a[e.type];if(!n)throw new RangeError("No selection type "+e.type+" defined");return n.fromJSON(t,e)},c.jsonID=function(t,e){if(t in a)throw new RangeError("Duplicate use of selection JSON ID "+t);return a[t]=e,e.prototype.jsonID=t,e},c.prototype.getBookmark=function(){return h.between(this.$anchor,this.$head).getBookmark()},Object.defineProperties(c.prototype,p),c.prototype.visible=!0;var u=function(t,e){this.$from=t,this.$to=e},h=function(e){function n(t,n){void 0===n&&(n=t),e.call(this,t,n)}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={$cursor:{configurable:!0}};return r.$cursor.get=function(){return this.$anchor.pos==this.$head.pos?this.$head:null},n.prototype.map=function(t,r){var o=t.resolve(r.map(this.head));if(!o.parent.inlineContent)return e.near(o);var i=t.resolve(r.map(this.anchor));return new n(i.parent.inlineContent?i:o,o)},n.prototype.replace=function(n,r){if(void 0===r&&(r=t.empty),e.prototype.replace.call(this,n,r),r==t.empty){var o=this.$from.marksAcross(this.$to);o&&n.ensureMarks(o)}},n.prototype.eq=function(t){return t instanceof n&&t.anchor==this.anchor&&t.head==this.head},n.prototype.getBookmark=function(){return new f(this.anchor,this.head)},n.prototype.toJSON=function(){return{type:"text",anchor:this.anchor,head:this.head}},n.fromJSON=function(t,e){if("number"!=typeof e.anchor||"number"!=typeof e.head)throw new RangeError("Invalid input for TextSelection.fromJSON");return new n(t.resolve(e.anchor),t.resolve(e.head))},n.create=function(t,e,n){void 0===n&&(n=e);var r=t.resolve(e);return new this(r,n==e?r:t.resolve(n))},n.between=function(t,r,o){var i=t.pos-r.pos;if(o&&!i||(o=i>=0?1:-1),!r.parent.inlineContent){var s=e.findFrom(r,o,!0)||e.findFrom(r,-o,!0);if(!s)return e.near(r,o);r=s.$head}return t.parent.inlineContent||(0==i||(t=(e.findFrom(t,-o,!0)||e.findFrom(t,o,!0)).$anchor).pos<r.pos!=i<0)&&(t=r),new n(t,r)},Object.defineProperties(n.prototype,r),n}(c);c.jsonID("text",h);var f=function(t,e){this.anchor=t,this.head=e};f.prototype.map=function(t){return new f(t.map(this.anchor),t.map(this.head))},f.prototype.resolve=function(t){return h.between(t.resolve(this.anchor),t.resolve(this.head))};var l=function(n){function r(t){var e=t.nodeAfter,r=t.node(0).resolve(t.pos+e.nodeSize);n.call(this,t,r),this.node=e}return n&&(r.__proto__=n),r.prototype=Object.create(n&&n.prototype),r.prototype.constructor=r,r.prototype.map=function(t,e){var o=e.mapResult(this.anchor),i=o.deleted,s=o.pos,a=t.resolve(s);return i?n.near(a):new r(a)},r.prototype.content=function(){return new t(e.from(this.node),0,0)},r.prototype.eq=function(t){return t instanceof r&&t.anchor==this.anchor},r.prototype.toJSON=function(){return{type:"node",anchor:this.anchor}},r.prototype.getBookmark=function(){return new d(this.anchor)},r.fromJSON=function(t,e){if("number"!=typeof e.anchor)throw new RangeError("Invalid input for NodeSelection.fromJSON");return new r(t.resolve(e.anchor))},r.create=function(t,e){return new this(t.resolve(e))},r.isSelectable=function(t){return!t.isText&&!1!==t.type.spec.selectable},r}(c);l.prototype.visible=!1,c.jsonID("node",l);var d=function(t){this.anchor=t};d.prototype.map=function(t){var e=t.mapResult(this.anchor),n=e.deleted,r=e.pos;return n?new f(r,r):new d(r)},d.prototype.resolve=function(t){var e=t.resolve(this.anchor),n=e.nodeAfter;return n&&l.isSelectable(n)?new l(e):c.near(e)};var m=function(e){function n(t){e.call(this,t.resolve(0),t.resolve(t.content.size))}return e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n,n.prototype.replace=function(n,r){if(void 0===r&&(r=t.empty),r==t.empty){n.delete(0,n.doc.content.size);var o=e.atStart(n.doc);o.eq(n.selection)||n.setSelection(o)}else e.prototype.replace.call(this,n,r)},n.prototype.toJSON=function(){return{type:"all"}},n.fromJSON=function(t){return new n(t)},n.prototype.map=function(t){return new n(t)},n.prototype.eq=function(t){return t instanceof n},n.prototype.getBookmark=function(){return y},n}(c);c.jsonID("all",m);var y={map:function(){return this},resolve:function(t){return new m(t)}};function g(t,e,n,r,o,i){if(e.inlineContent)return h.create(t,n);for(var s=r-(o>0?0:1);o>0?s<e.childCount:s>=0;s+=o){var a=e.child(s);if(a.isAtom){if(!i&&l.isSelectable(a))return l.create(t,n-(o<0?a.nodeSize:0))}else{var c=g(t,a,n+o,o<0?a.childCount:0,o,i);if(c)return c}n+=a.nodeSize*o}}function v(t,e,n){var r=t.steps.length-1;if(!(r<e)){var s,a=t.steps[r];if(a instanceof o||a instanceof i)t.mapping.maps[r].forEach((function(t,e,n,r){null==s&&(s=r)})),t.setSelection(c.near(t.doc.resolve(s),n))}}var S=function(t){function e(e){t.call(this,e.doc),this.time=Date.now(),this.curSelection=e.selection,this.curSelectionFor=0,this.storedMarks=e.storedMarks,this.updated=0,this.meta=Object.create(null)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={selection:{configurable:!0},selectionSet:{configurable:!0},storedMarksSet:{configurable:!0},isGeneric:{configurable:!0},scrolledIntoView:{configurable:!0}};return n.selection.get=function(){return this.curSelectionFor<this.steps.length&&(this.curSelection=this.curSelection.map(this.doc,this.mapping.slice(this.curSelectionFor)),this.curSelectionFor=this.steps.length),this.curSelection},e.prototype.setSelection=function(t){if(t.$from.doc!=this.doc)throw new RangeError("Selection passed to setSelection must point at the current document");return this.curSelection=t,this.curSelectionFor=this.steps.length,this.updated=-3&(1|this.updated),this.storedMarks=null,this},n.selectionSet.get=function(){return(1&this.updated)>0},e.prototype.setStoredMarks=function(t){return this.storedMarks=t,this.updated|=2,this},e.prototype.ensureMarks=function(t){return r.sameSet(this.storedMarks||this.selection.$from.marks(),t)||this.setStoredMarks(t),this},e.prototype.addStoredMark=function(t){return this.ensureMarks(t.addToSet(this.storedMarks||this.selection.$head.marks()))},e.prototype.removeStoredMark=function(t){return this.ensureMarks(t.removeFromSet(this.storedMarks||this.selection.$head.marks()))},n.storedMarksSet.get=function(){return(2&this.updated)>0},e.prototype.addStep=function(e,n){t.prototype.addStep.call(this,e,n),this.updated=-3&this.updated,this.storedMarks=null},e.prototype.setTime=function(t){return this.time=t,this},e.prototype.replaceSelection=function(t){return this.selection.replace(this,t),this},e.prototype.replaceSelectionWith=function(t,e){var n=this.selection;return!1!==e&&(t=t.mark(this.storedMarks||(n.empty?n.$from.marks():n.$from.marksAcross(n.$to)||r.none))),n.replaceWith(this,t),this},e.prototype.deleteSelection=function(){return this.selection.replace(this),this},e.prototype.insertText=function(t,e,n){void 0===n&&(n=e);var r=this.doc.type.schema;if(null==e)return t?this.replaceSelectionWith(r.text(t),!0):this.deleteSelection();if(!t)return this.deleteRange(e,n);var o=this.storedMarks;if(!o){var i=this.doc.resolve(e);o=n==e?i.marks():i.marksAcross(this.doc.resolve(n))}return this.replaceRangeWith(e,n,r.text(t,o)),this.selection.empty||this.setSelection(c.near(this.selection.$to)),this},e.prototype.setMeta=function(t,e){return this.meta["string"==typeof t?t:t.key]=e,this},e.prototype.getMeta=function(t){return this.meta["string"==typeof t?t:t.key]},n.isGeneric.get=function(){for(var t in this.meta)return!1;return!0},e.prototype.scrollIntoView=function(){return this.updated|=4,this},n.scrolledIntoView.get=function(){return(4&this.updated)>0},Object.defineProperties(e.prototype,n),e}(s);function k(t,e){return e&&t?t.bind(e):t}var w=function(t,e,n){this.name=t,this.init=k(e.init,n),this.apply=k(e.apply,n)},b=[new w("doc",{init:function(t){return t.doc||t.schema.topNodeType.createAndFill()},apply:function(t){return t.doc}}),new w("selection",{init:function(t,e){return t.selection||c.atStart(e.doc)},apply:function(t){return t.selection}}),new w("storedMarks",{init:function(t){return t.storedMarks||null},apply:function(t,e,n,r){return r.selection.$cursor?t.storedMarks:null}}),new w("scrollToSelection",{init:function(){return 0},apply:function(t,e){return t.scrolledIntoView?e+1:e}})],O=function(t,e){var n=this;this.schema=t,this.fields=b.concat(),this.plugins=[],this.pluginsByKey=Object.create(null),e&&e.forEach((function(t){if(n.pluginsByKey[t.key])throw new RangeError("Adding different instances of a keyed plugin ("+t.key+")");n.plugins.push(t),n.pluginsByKey[t.key]=t,t.spec.state&&n.fields.push(new w(t.key,t.spec.state,t))}))},$=function(t){this.config=t},M={schema:{configurable:!0},plugins:{configurable:!0},tr:{configurable:!0}};M.schema.get=function(){return this.config.schema},M.plugins.get=function(){return this.config.plugins},$.prototype.apply=function(t){return this.applyTransaction(t).state},$.prototype.filterTransaction=function(t,e){void 0===e&&(e=-1);for(var n=0;n<this.config.plugins.length;n++)if(n!=e){var r=this.config.plugins[n];if(r.spec.filterTransaction&&!r.spec.filterTransaction.call(r,t,this))return!1}return!0},$.prototype.applyTransaction=function(t){if(!this.filterTransaction(t))return{state:this,transactions:[]};for(var e=[t],n=this.applyInner(t),r=null;;){for(var o=!1,i=0;i<this.config.plugins.length;i++){var s=this.config.plugins[i];if(s.spec.appendTransaction){var a=r?r[i].n:0,c=r?r[i].state:this,p=a<e.length&&s.spec.appendTransaction.call(s,a?e.slice(a):e,c,n);if(p&&n.filterTransaction(p,i)){if(p.setMeta("appendedTransaction",t),!r){r=[];for(var u=0;u<this.config.plugins.length;u++)r.push(u<i?{state:n,n:e.length}:{state:this,n:0})}e.push(p),n=n.applyInner(p),o=!0}r&&(r[i]={state:n,n:e.length})}}if(!o)return{state:n,transactions:e}}},$.prototype.applyInner=function(t){if(!t.before.eq(this.doc))throw new RangeError("Applying a mismatched transaction");for(var e=new $(this.config),n=this.config.fields,r=0;r<n.length;r++){var o=n[r];e[o.name]=o.apply(t,this[o.name],this,e)}for(var i=0;i<N.length;i++)N[i](this,t,e);return e},M.tr.get=function(){return new S(this)},$.create=function(t){for(var e=new O(t.doc?t.doc.type.schema:t.schema,t.plugins),n=new $(e),r=0;r<e.fields.length;r++)n[e.fields[r].name]=e.fields[r].init(t,n);return n},$.prototype.reconfigure=function(t){for(var e=new O(this.schema,t.plugins),n=e.fields,r=new $(e),o=0;o<n.length;o++){var i=n[o].name;r[i]=this.hasOwnProperty(i)?this[i]:n[o].init(t,r)}return r},$.prototype.toJSON=function(t){var e={doc:this.doc.toJSON(),selection:this.selection.toJSON()};if(this.storedMarks&&(e.storedMarks=this.storedMarks.map((function(t){return t.toJSON()}))),t&&"object"==typeof t)for(var n in t){if("doc"==n||"selection"==n)throw new RangeError("The JSON fields `doc` and `selection` are reserved");var r=t[n],o=r.spec.state;o&&o.toJSON&&(e[n]=o.toJSON.call(r,this[r.key]))}return e},$.fromJSON=function(t,e,r){if(!e)throw new RangeError("Invalid input for EditorState.fromJSON");if(!t.schema)throw new RangeError("Required config field 'schema' missing");var o=new O(t.schema,t.plugins),i=new $(o);return o.fields.forEach((function(o){if("doc"==o.name)i.doc=n.fromJSON(t.schema,e.doc);else if("selection"==o.name)i.selection=c.fromJSON(i.doc,e.selection);else if("storedMarks"==o.name)e.storedMarks&&(i.storedMarks=e.storedMarks.map(t.schema.markFromJSON));else{if(r)for(var s in r){var a=r[s],p=a.spec.state;if(a.key==o.name&&p&&p.fromJSON&&Object.prototype.hasOwnProperty.call(e,s))return void(i[o.name]=p.fromJSON.call(a,t,e[s],i))}i[o.name]=o.init(t,i)}})),i},$.addApplyListener=function(t){N.push(t)},$.removeApplyListener=function(t){var e=N.indexOf(t);e>-1&&N.splice(e,1)},Object.defineProperties($.prototype,M);var N=[];function J(t,e,n){for(var r in t){var o=t[r];o instanceof Function?o=o.bind(e):"handleDOMEvents"==r&&(o=J(o,e,{})),n[r]=o}return n}var j=function(t){this.props={},t.props&&J(t.props,this,this.props),this.spec=t,this.key=t.key?t.key.key:R("plugin")};j.prototype.getState=function(t){return t[this.key]};var T=Object.create(null);function R(t){return t in T?t+"$"+ ++T[t]:(T[t]=0,t+"$")}var E=function(t){void 0===t&&(t="key"),this.key=R(t)};E.prototype.get=function(t){return t.config.pluginsByKey[this.key]},E.prototype.getState=function(t){return t[this.key]};export{m as A,$ as E,l as N,E as P,c as S,h as T,j as a,u as b};