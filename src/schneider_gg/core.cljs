(ns schneider-gg.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [sablono.core :as html :refer-macros [html]]))

(enable-console-print!)

(def app-state (atom {:count 0}))

(defn read
  [{:keys [state] :as env} key params]
  (let [st @state]
    (if-let [[_ value] (find st key)]
      {:value value}
      {:value :not-found})))

(defn mutate
  [{:keys [state] :as env} key params]
  (if (= 'increment key)
    {:value {:keys [:count]}
     :action #(swap! state update-in [:count] inc)}
    {:value :not-found}))

(defui Counter
  static om/IQuery
  (query [this]
         [:count])
  Object
  (render [this]
          (let [{:keys [count]} (om/props this)]
            (dom/div nil
                     (dom/span nil (str "Count: " count))
                     (dom/button
                      #js {:onClick
                           (fn [e] (om/transact! this '[(increment)]))}
                      "Click me to argue!")))))


(def reconciler
  (om/reconciler
   {:state app-state
    :parser (om/parser {:read read :mutate mutate})}))

;;;; ##################

(defui AppMain
  Object
  (render [this]
          (html [:div {:class "container"}
                 [:p {:class "text-center"} "Ist des ein geiler Scheiß"] ])))

#_(def app (om/factory AppMain))

(defn init []
  (om/add-root! reconciler
                AppMain (gdom/getElement "app")))
